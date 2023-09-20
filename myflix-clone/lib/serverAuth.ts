import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';

import prismadb from '@/lib/prismadb';

const serverAuth = async (req: NextApiRequest ) => {
    // We are using the session to get other fields from user
    const session = await getSession({req});

    // Check if session exist
    // if session or user or email does not exist
    if (!session?.user?.email) {
        throw new Error('Not Signed In');
    }

    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email,
        }
    })

    if (!currentUser) {
        throw new Error('Not Signed In');
    }

    return { currentUser };

};

export default serverAuth;