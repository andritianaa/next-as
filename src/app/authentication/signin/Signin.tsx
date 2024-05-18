"use client"
import { signIn } from 'next-auth/react';
import styles from '../styles/Signin.module.css';

type SignInProps = {
    csrfToken: string;
    providers: Record<string, any>;
};

export const SignIn: React.FC<SignInProps> = ({ csrfToken, providers }) => {
    return (
        <div className={styles.container}>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button className={styles.button} onClick={() => signIn(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    );
};

