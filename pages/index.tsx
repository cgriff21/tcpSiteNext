import Head from 'next/head'
import Link from 'next/link'

// Import the circular menu
import { CircleMenu, CircleMenuItem } from "@components/homeMenu";

export default function Home() {
  return (
    <div className="home-background">
      <Head>
        <title>The Chance Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CircleMenu
        startAngle={-90}
        rotationAngle={360}
        itemSize={12}
        radius={24}
        rotationAngleInclusive={false}
      >
        <CircleMenuItem tooltip="Find Housing">
          <Link href="/">
            <a className="circle-menu-item-text">
              Find Housing
            </a>
          </Link>
        </CircleMenuItem>
        <CircleMenuItem tooltip="Donate">
          <Link href="https://www.mightycause.com/organization/Chance-Project">
            <a className="circle-menu-item-text">
              Ways To Give
            </a>
          </Link>
        </CircleMenuItem>
        <CircleMenuItem tooltip="Contact">
          <Link href="contact">
            <a className="circle-menu-item-text">
              Contact
            </a>
          </Link>
        </CircleMenuItem>
        <CircleMenuItem tooltip="About">
          <Link href="who-we-are">
            <a className="circle-menu-item-text">
              Who We are
            </a>
          </Link>
        </CircleMenuItem>
        <CircleMenuItem tooltip="Initiatives">
          <Link href="/">
            <a className="circle-menu-item-text">
              Our Initiatives
            </a>
          </Link>
        </CircleMenuItem>
      </CircleMenu>
    </div>
  );
};