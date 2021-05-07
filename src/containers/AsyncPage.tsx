import type React from 'react';
import { useState, useEffect } from 'react';

import { PageProps } from '../types';

const asyncPage = (importPage: () => Promise<{ default: React.FC<PageProps>; }>) => {
    const AsyncPage: React.FC<PageProps> = props => {
        const [Page, setPage] = useState<React.ReactElement | null>(null);

        useEffect(() => {
            const asyncImport = async () => {
                const { default: ImportedPage } = await importPage();
                setPage(<ImportedPage {...props} />);
            };

            asyncImport();
        }, [props]);

        return Page ? Page : null;
    };

    return AsyncPage;
};

export default asyncPage;
