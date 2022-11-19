import { useRouter } from 'next/router';

const lightURLs = ['/'];

const useLightElements = () => {

    const router = useRouter();

    const isLight = lightURLs.some(item => item === router.pathname);

    return { isLight }
}

export default useLightElements;