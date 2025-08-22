import React from 'react'
import Hero from './Hero'
import Kite from './Kite'
import Console from './Console'
import Coin from './Coin'
import KiteConnectAPI from './KiteConnectAPI'
import Varsity from './Varsity'
import Universe from './Universe'
import LeftSection from './LeftSection'
import RightSection from './RightSection'


function ProductsPage() {
    return (
        <>
            <Hero />
            <LeftSection imageURL="media/images/kite.png" productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="#" learnMore="#" googlePlayURL="media/images/googlePlayBadge.svg" appStoreURL="media/images/appstoreBadge.svg" />

            <RightSection imageURL="media/images/Console.png" productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." tryDemo="#" learnMore="" googlePlayURL="" appStoreURL="" />

            <LeftSection imageURL="media/images/Coin.png" productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" googlePlayURL="media/images/googlePlayBadge.svg" appStoreURL="media/images/appstoreBadge.svg" />

            <RightSection imageURL="media/images/KiteConnectAPI.svg" productName="Kite Connect API" productDescription="Build your own trading platform with our powerful and easy-to-use APIs. Access real-time market data, execute orders, and manage portfolios." tryDemo="" learnMore="" googlePlayURL="" appStoreURL="" />


            <LeftSection imageURL="media/images/Varsity.png" productName="Varsity" productDescription="Learn trading and investing with our comprehensive educational platform. Access articles, videos, and quizzes to enhance your knowledge." tryDemo="" learnMore="" googlePlayURL="media/images/googlePlayBadge.svg" appStoreURL="media/images/appstoreBadge.svg" />
            <Universe />
        </>
    )
}

export default ProductsPage