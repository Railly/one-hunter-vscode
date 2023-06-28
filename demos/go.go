package main

import (
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net"
	"net/http"
	"os"
	"strconv"
	"sync"
	"time"

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

func worker(id int) {
	fmt.Printf("Worker %d starting\n", id)
	time.Sleep(1 * time.Second)
	fmt.Printf("Worker %d starting\n", id)
}

func worker3(id int, jobs <-chan int, results chan<- int) {
	for j := range jobs {
		fmt.Println("worker:", id, ", started job", j)
		time.Sleep(1 * time.Second)
		fmt.Println("worker:", id, ", finished job", j)
		results <- j * 2
	}
}

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
	c1 := make(chan int, 5)
	c2 := make(chan int, 5)
	var a int
	var b string
	var c error
	var d bool
	var e byte
	var f uintptr
	var g error
	var h rune
	var i int
	var j float32
	var k complex64
	var l []int
	var m map[string]int
	var n chan int
	var o func()
	var p interface{}
	var q struct {
		x int
		y string
	}
	fmt.Println(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q)

	fmt.Println(c1, c2)

	nc, _ := strconv.Atoi(os.Args[2])
	url := os.Args[3]

	log.Printf("opening %d connections to %s", nc, url)
	wg.Add(nc)

	for i := 1; i <= 5; i++ {
		wg.Add(2)

		// Approach 1
		i := i
		go func() {
			defer wg.Done()
			worker(i)
		}()

		// Approach 2
		go func(u int) {
			defer wg.Done()
			worker(u)
		}(i)
	}

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
