import './Slider.scss';
import React, { useEffect, useState, useRef } from 'react';

type Props = {
    min: number,
    max: number,
    softcap?: boolean
}

/** 
 * @param min Minimum value of the slider.
 * @param max Maximum value of the slider.
 * @param softcap If true then the maximum value in the slider will include all values greater than it.
 */
function Slider({ min, max, softcap = false }: Props) {

    const leftInputRef = useRef<HTMLInputElement>(null);
    const rightInputRef = useRef<HTMLInputElement>(null);
    const leftThumbRef = useRef<HTMLDivElement>(null);
    const rightThumbRef = useRef<HTMLDivElement>(null);
    const rangeRef = useRef<HTMLDivElement>(null);

    const setLeftValue = () => {
        if (leftInputRef.current && rightInputRef.current && leftThumbRef.current && rangeRef.current) {
            let leftInput = leftInputRef.current;
            let min = parseInt(leftInput.min);
            let max = parseInt(leftInput.max);

            leftInput.value = Math.min(
                parseInt(leftInput.value),
                parseInt(rightInputRef.current.value) - 1 
            ).toString();

            let percent = (parseInt(leftInput.value) - min) / (max - min) * 100;
            leftThumbRef.current.style.left = percent + '%';
            rangeRef.current.style.left = percent + '%';
        }
    }

    const setRightValue = () => {
        if (leftInputRef.current && rightInputRef.current && rightThumbRef.current && rangeRef.current) {
            let rightInput = rightInputRef.current;
            let min = parseInt(rightInput.min);
            let max = parseInt(rightInput.max);

            rightInput.value = Math.max(
                parseInt(rightInput.value),
                parseInt(leftInputRef.current.value) + 1 
            ).toString();

            let percent = (parseInt(rightInput.value) - min) / (max - min) * 100;
            rightThumbRef.current.style.right = (100 - percent) + '%';
            rangeRef.current.style.right = (100 - percent) + '%';
        }
    }

    useEffect(() => {
        setRightValue();
        setLeftValue();
        if (leftInputRef.current && rightInputRef.current) {
            leftInputRef.current.addEventListener('input', setLeftValue)
            rightInputRef.current.addEventListener('input', setRightValue);
        }
    });

    return (
        <div className='slider-container'>
            <input ref={ leftInputRef } type='range' className='left-input' min={ min } max={ max } />
            <input ref={ rightInputRef } type='range' className='right-input' min={ min } max={ max } />

            <div className='slider'>
                <div className='track'></div>
                <div ref={ rangeRef } className='range'></div>
                <div ref={ leftThumbRef } className='thumb left'></div>
                <div ref={ rightThumbRef } className='thumb right'></div>
            </div>
        </div>
    )
}

export default Slider;