import React from "react";
import Router from 'next/router';

export default function CustomErrorPage() {
    React.useEffect(() => { Router.push("/") }, [])

    return null
}