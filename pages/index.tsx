import Head from 'next/head'
import Link from 'next/link'
import React from 'react';


// Import the circular menu
import { CircleMenu, CircleMenuItem } from "@components/homeMenu";

export default function Home() {


  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
  });

  const phoneWidth = width < 500;
  const ipadWidth = width > 500 && width < 800;

  let mainSize = 20;
  let menuSize = 12; // screens over 800px wide
  let menuRadius = 24;

  if (phoneWidth) {
    mainSize = 7;   // under 500px wide
    menuSize = 5;
    menuRadius = 8;
  }
  else if (ipadWidth) {
    mainSize = 10;     // between 500 & 800px
    menuSize = 6;
    menuRadius = 12;
  }


  return (
    <div className="home-background">
      <Head>
        <title>The Chance Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CircleMenu
        startAngle={-90}
        rotationAngle={360}
        mainSize={mainSize}
        itemSize={menuSize}
        radius={menuRadius}
        rotationAngleInclusive={false}
      >
        <CircleMenuItem>
          <Link href="https://www.pathwaysnetwork.net/">
            <a className="circle-menu-item-text">
              Find Housing
            </a>
          </Link>
        </CircleMenuItem>
        <CircleMenuItem >
          <Link href="/contact">
            <a className="circle-menu-item-text">
              Contact
            </a>
          </Link>
        </CircleMenuItem>
        <CircleMenuItem >
          <Link href="https://www.mightycause.com/organization/Chance-Project">
            <a className="circle-menu-item-text">
              Ways To Give
            </a>
          </Link>
        </CircleMenuItem>
        <CircleMenuItem >
          <Link href="/initiatives">
            <a className="circle-menu-item-text">
              Our Initiatives
            </a>
          </Link>
        </CircleMenuItem>
        <CircleMenuItem >
          <Link href="/about">
            <a className="circle-menu-item-text">
              Who We are
            </a>
          </Link>
        </CircleMenuItem>
      </CircleMenu>
    </div>
  );
};