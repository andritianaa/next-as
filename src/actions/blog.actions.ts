"use server"

import { Post, PostStatus } from "@prisma/client"
import { currentUser } from "@/lib/current-user"
import { calculateReadingTime } from "../lib/utils"
import { prisma } from "../prisma"

export const publish = async (title: string, content: string, image: string, status: PostStatus, subtitle: string) => {
    const user = await currentUser()
    if (user) {
        console.log(title, content, image);
        const readTime = calculateReadingTime(content)
        await prisma.post.create({
            data: {
                authorId: user.id,
                title,
                content,
                image,
                readTime,
                status,
                subtitle,
                createdAt: new Date()
            },
        })
    }
}


export const edit = async (title: string, content: string, image: string, status: PostStatus, subtitle: string, id: number) => {
    const readTime = calculateReadingTime(content)
    await prisma.post.update({
        where: {
            id
        },
        data: {
            title,
            content,
            image,
            readTime,
            status,
            subtitle
        },
    })
}

export const remove = async (id: number) => {
    await prisma.post.update({
        where: {
            id
        },
        data: {
            status: PostStatus.trash
        },
    })
}

