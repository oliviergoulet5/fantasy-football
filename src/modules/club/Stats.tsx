import { Dropdown } from '../../common/components';
import { StatsCard } from './stats/StatsCard';

export function Stats() {

    const temporaryOptions = ['All Seasons', '2020/21', '2019/20', '2018/19', '2017/18', '2016/17', '2015/16']
    return (
        <div>
            <div className='form-group'>
                <p className='label'>Season</p>
                <Dropdown options={ temporaryOptions } liftSelectedOption={ () => {} }/>
            </div>
            <div className='flex justify-between mt-4'>
                <StatsCard name='Attack' stats={[
                    { statName: 'Goals', statValue: '1032' },
                    { statName: 'Goals per match', statValue: '1.22' },
                    { statName: 'Shots', statValue: '4425' },
                    { statName: 'Shots on target', statValue: '1495' },
                    { statName: 'Shooting accuracy %', statValue: '34%' },
                    { statName: 'Penalties scored', statValue: '28' },
                    { statName: 'Big chances created', statValue: '420' },
                    { statName: 'Hit woodwork', statValue: '129' },

                ]} />
                <StatsCard name='Team Play' stats={[
                    { statName: 'Goals', statValue: '1032' },
                    { statName: 'Goals per match', statValue: '1.22' },
                    { statName: 'Shots', statValue: '4425' },
                    { statName: 'Shots on target', statValue: '1495' },
                    { statName: 'Shooting accuracy %', statValue: '34%' },
                    { statName: 'Penalties scored', statValue: '28' },
                    { statName: 'Big chances created', statValue: '420' },
                    { statName: 'Hit woodwork', statValue: '129' },

                ]} />
                <StatsCard name='Defence' stats={[
                    { statName: 'Goals', statValue: '1032' },
                    { statName: 'Goals per match', statValue: '1.22' },
                    { statName: 'Shots', statValue: '4425' },
                    { statName: 'Shots on target', statValue: '1495' },
                    { statName: 'Shooting accuracy %', statValue: '34%' },
                    { statName: 'Penalties scored', statValue: '28' },
                    { statName: 'Big chances created', statValue: '420' },
                    { statName: 'Hit woodwork', statValue: '129' },

                ]} />
                <StatsCard name='Discipline' stats={[
                    { statName: 'Goals', statValue: '1032' },
                    { statName: 'Goals per match', statValue: '1.22' },
                    { statName: 'Shots', statValue: '4425' },
                    { statName: 'Shots on target', statValue: '1495' },
                    { statName: 'Shooting accuracy %', statValue: '34%' },
                    { statName: 'Penalties scored', statValue: '28' },
                    { statName: 'Big chances created', statValue: '420' },
                    { statName: 'Hit woodwork', statValue: '129' },

                ]} />
            </div>
        </div>
    )
}