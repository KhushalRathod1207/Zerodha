import React from 'react'
import Charges from './Charges';
import ChargesTabs from './ChargesTabs';
import ChargesAccountOpening from './ChargesAccountOpening';
import DematAMC from './DematAMC';
import ChargesOptionalValue from './ChargesOptionalValue';
import ChargesExplained from './ChargesExplained';

function PricingPage() {
    return (
        <>
            <Charges />
            <ChargesTabs />
            <ChargesAccountOpening />
            <DematAMC />
            <ChargesOptionalValue />
            <ChargesExplained />
        </>
    )
}

export default PricingPage