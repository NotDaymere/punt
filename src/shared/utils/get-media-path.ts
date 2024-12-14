import { getCoreConfig } from 'shared/config/core.config';

export const getMediaPath = (name: string) => {
    return `${getCoreConfig().cdn}/${name}`;
};

export const getUploadsPath = (name: string) => {
    return `${getCoreConfig().uploads}${name}`;
}