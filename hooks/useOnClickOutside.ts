import { RefObject, useEffect } from 'react'

type AnyEvent = MouseEvent | TouchEvent

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
    handler: (event: AnyEvent) => void,
    ...refs: RefObject<T>[]
): void {
    useEffect(() => {
        const listener = (event: AnyEvent) => {
            if (!refs.length || refs.some(el => el.current!.contains(event.target as Node))) {
                return
            }
            handler(event)
        }

        document.addEventListener(`mousedown`, listener)
        document.addEventListener(`touchstart`, listener)

        return () => {
            document.removeEventListener(`mousedown`, listener)
            document.removeEventListener(`touchstart`, listener)
        }

        // Reload only if ref or handler changes
    }, [refs, handler])
}

export default useOnClickOutside