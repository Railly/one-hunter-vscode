//@ts-nocheck
import { redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types'

interface Session {
  user: string
}
for (const key in object) {
  if (object.hasOwnProperty(key)) {
    const element = object[key]
  }
}

for (const iterator of object) {
  console.log(iterator)
}

export const load: PageLoad = async ({ parent }) => {
  const { session } = await parent()
  if (!session?.user) {
    throw redirect(302, '/')
  }

  return {}
}

// example of usage of typeof

export type Session = typeof import('./$session').Session
