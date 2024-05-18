
import type { PageParams } from "@/types/next";
import {SignIn} from "./Signin";
import { baseAuth } from '@/lib/auth';

import { getCsrfToken, getProviders, getSession, signIn } from 'next-auth/react';


export default async function RoutePage(props: PageParams<{  }>) {
    const session = await baseAuth()
    if (session) {
        return {
            redirect: { destination: '/', permanent: false },
        };
    }
    const csrfToken = await getCsrfToken();
    const providers = await getProviders();
    console.log(providers);
    
  return <></>
  
}