package main

import (
	"io"
	"io/ioutil"
	"log"
	"net"
	"net/http"
	"os"
	"strconv"
	"sync"

	"github.com/ian-kent/linkio"
)

type slowConn struct {
	net.Conn
	reader io.Reader
	writer io.Writer
}

func (sc slowConn) Read(b []byte) (n int, err error) {
	return sc.reader.Read(b)
}

func (sc slowConn) Write(p []byte) (n int, err error) {
	return sc.writer.Write(p)
}

var cli http.Client

func init() {
	bps, _ := strconv.Atoi(os.Args[1])

	link := linkio.NewLink(linkio.Throughput(bps) * linkio.BytePerSecond)
	cli = http.Client{
		Transport: &http.Transport{
			Dial: func(network, addr string) (net.Conn, error) {
				conn, err := net.Dial(network, addr)
				if err != nil {
					return nil, err
				}

				return slowConn{conn, link.NewLinkReader(conn), link.NewLinkWriter(conn)}, nil
			},
		},
	}
}

func main() {
	var wg sync.WaitGroup

	nc, _ := strconv.Atoi(os.Args[2])
	url := os.Args[3]

	log.Printf("opening %d connections to %s", nc, url)
	wg.Add(nc)

	for i := 0; i < nc; i++ {
		go func(i int) {
			defer wg.Done()

			res, err := cli.Get(url)
			if err != nil {
				log.Printf("  - errored %d: %s", i, err)
				return
			}

			_, err = ioutil.ReadAll(res.Body)
			if err != nil {
				log.Printf("  - errored %d: %s", i, err)
				return
			}

			res.Body.Close()

			log.Printf("  - completed %d", i)
		}(i)
	}

	wg.Wait()
}
