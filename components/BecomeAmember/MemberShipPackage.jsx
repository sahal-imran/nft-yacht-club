import TheArt from '../About/TheArt';
import Member from '../Home/Member';
import NeedHelp from './NeedHelp';
import PackageSelected from "./PackageSelected";

function MemberShipPackage() {
    return (
        <>
            <TheArt />
            <PackageSelected />
            <Member />
            <NeedHelp />
        </>
    )
}

export default MemberShipPackage;