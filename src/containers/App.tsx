import React from 'react';
import { useState } from 'react';
import { Center, Spinner } from '@chakra-ui/react';

import Page1 from '../components/Page1';
// Part 1 - No Code Splitting
// import Page2 from '../components/Page2';
// import Page3 from '../components/Page3';

// Part 3 - Cleaner Code Splitting
// import AsyncPage from './AsyncPage';

// Part 4 - React.lazy
const Page2Lazy = React.lazy(() => import('../components/Page2'));
const Page3Lazy = React.lazy(() => import('../components/Page3'));

const Loading: React.FC = () => {
    return (
        <Center h="100vh">
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        </Center>
    );
};

const App: React.FC = () => {
    // Part 1 - No Code Splitting
    const [route, setRoute] = useState<string>('page1');
    // Part 2 - Code Splitting - manual
    // const [Component, setComponent] = useState<React.ReactElement | null>(null);

    const onRouteChange = async (route: string) => {
        // Part 1 - No Code Splitting
        // setRoute(route);
        // Part 2 - Code Splitting - manual
        // if (route === 'page1') {
        //     setRoute(route);
        // } else if (route === 'page2') {
        //     const { default: Page2 } = await import('../components/Page2');
        //     setRoute(route);
        //     setComponent(<Page2 onRouteChange={onRouteChange} />);
        // } else {
        //     const { default: Page3 } = await import('../components/Page3');
        //     setRoute(route);
        //     setComponent(<Page3 onRouteChange={onRouteChange} />);
        // }
        // Part 3 - Cleaner Code Splitting && // Part 4 - React.lazy
        setRoute(route);
    };

    // Part 1 - No code splitting
    // if (route === 'page1') {
    //     return <Page1 onRouteChange={onRouteChange} />;
    // } else if (route === 'page2') {
    //     return <Page2 onRouteChange={onRouteChange} />;
    // } else {
    //     return <Page3 onRouteChange={onRouteChange} />;
    // }
    // Part 2 - Code Splitting - manual
    // if (route === 'page1') {
    //     return <Page1 onRouteChange={onRouteChange} />;
    // } else {
    //     if (!Component) return null;

    //     return Component;
    // }
    // Part 3 - Cleaner Code Splitting
    // if (route === 'page1') {
    //     return <Page1 onRouteChange={onRouteChange} />;
    // } else if (route === 'page2') {
    //     const AsyncPage2 = AsyncPage(() => import('../components/Page2'));
    //     return <AsyncPage2 onRouteChange={onRouteChange} />;
    // } else {
    //     const AsyncPage3 = AsyncPage(() => import('../components/Page3'));
    //     return <AsyncPage3 onRouteChange={onRouteChange} />;
    // }
    // Part 4 - React.lazy
    if (route === 'page1') {
        return <Page1 onRouteChange={onRouteChange} />;
    } else if (route === 'page2') {
        return (
            <React.Suspense fallback={<Loading />}>
                <Page2Lazy onRouteChange={onRouteChange} />
            </React.Suspense>
        );
    } else {
        return (
            <React.Suspense fallback={<Loading />}>
                <Page3Lazy onRouteChange={onRouteChange} />
            </React.Suspense>
        );
    }
};

export default App;
