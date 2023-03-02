//@ts-nocheck
import { redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types'

interface Session {
  user: string
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
