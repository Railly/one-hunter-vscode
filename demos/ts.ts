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
