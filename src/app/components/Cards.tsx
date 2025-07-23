"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CardProps {
    num: string
    title: string
    desc: string
    fullDesc: string
}

const Cards: React.FC<CardProps> = ({num, title, desc, fullDesc}) => {
    const [expanded, setExpanded] = useState(false)

    return(
        <Card className="serve h-66 xl:w-84">
            <span style={{fontWeight: "bold"}} className='text-xl pl-6'>{num}</span>
            <CardHeader>
                <CardTitle className="title">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto">
                <p className={`${expanded ? "": "line-clamp-3"}`}>
                    {expanded ? fullDesc:desc}
                </p>
                <button onClick={() => setExpanded(!expanded)} className="mt-4">
                    {expanded ? "show less" : "Read More"}
                </button>
            </CardContent>
        </Card>
    )
}

export default Cards