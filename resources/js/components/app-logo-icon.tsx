import { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            {...props}
            src="/storage/DHVSU-LOGO.png"
            alt="DHVSU Logo"
            style={{ width: '40px', height: 'auto' }}
        />
    );
}