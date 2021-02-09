import React from 'react';
import Slider from '@material-ui/core/Slider';
import { styled } from '@material-ui/styles';

type Props = {
    min: number;
    max: number;
};

const StyledSlider = styled(Slider)({
    color: '#1D4ED8',
});

function RangeSlider({ min, max }: Props) {
    const [value, setValue] = React.useState<number[]>([min, max]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div className="mx-2 w-60 h-8">
            <StyledSlider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                max={max}
                min={min}
            ></StyledSlider>
        </div>
    );
}

export default RangeSlider;
