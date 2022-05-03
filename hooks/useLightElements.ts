import { useRouter } from 'next/router';

const lightURLs = ['/', '/help'];

const useLightElements = () => {

    const router = useRouter();

    const isLight = lightURLs.some(item => item === router.pathname);

    return { isLight }
}

export default useLightElements;