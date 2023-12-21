"use client"

import Link from "next/link";
import Menu from "./Hamburger";
import { useState } from "react";

export interface MenuState {
    initial?: boolean | null,
    clicked?: boolean | null,
    menuName?: "close" | "menu"
}

export default function Header() {

    const [menuState, setMenuState] = useState<MenuState>({
        initial: false,
        clicked: null,
        menuName: "menu"
    })
    const [disabled, setDisabled] = useState(false)

    const handleMenu = () => {
        disableAnimation()
        if (menuState.initial === false) {
            setMenuState({
                initial: null,
                clicked: true,
                menuName: "close"
            })
            console.log(1)
        } else if (menuState.clicked === true) {
            setMenuState({
                clicked: !menuState.clicked,
                menuName: "menu"
            })
            console.log(2)
        } else if (menuState.clicked === false) {
            setMenuState({
                clicked: !menuState.clicked,
                menuName: "close"
            })
            console.log(3)
        }
    }

    // tell us if the animation should be disabled to avaoid spam
    const disableAnimation = () => {
        setDisabled(!disabled)
        setTimeout(() => {
            setDisabled(false)
        }, 1300)
    }


    return (
        <header className="w-full p-3 bg-green-900 fixed top-0">
            <main className="flex justify-between lg:w-2/3 mx-auto">
                <div>
                    <Link href="/" className="-tracking-widest font-bold">playground</Link>
                </div>
                <div>
                    <button disabled={disabled} onClick={handleMenu} className="underline font-semibold -tracking-wider">{menuState.menuName}</button>
                </div>
            </main>
            <Menu state={menuState} />
        </header>
    )
}