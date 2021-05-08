import { MainLayout } from '../../common/layouts';
import { Lineup } from '../../common/components';

function Preview() {

    return (
        <MainLayout>
            <div className='flex flex-col items-center lg:flex-row justify-between space-y-5 space-x-0 lg:space-y-0 lg:space-x-5'>
                <Lineup venue='home'/>
                <Lineup venue='away'/>
            </div>
            <div className='fg-item mt-5'>
                <p>LOLOLOLOOLOLOOL</p>
            </div>
        </MainLayout>
    )
}

export default Preview;