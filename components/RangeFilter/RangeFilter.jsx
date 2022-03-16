import { useContext, useState, useEffect } from 'react';
import { CatalogContext } from '../../Provider';
import { Range, getTrackBackground } from 'react-range';
import {
	stepOfRangeInput,
} from '../../config/constants';

export const RangeFilter = () => {
	const { prices, selectedPrices, setSelectedPrices } = useContext(CatalogContext);

	const setRangeValues = (values) => {
		setSelectedPrices(values)
	}


	const MIN = prices.min;
	const MAX = prices.max;

	const rangeValues = selectedPrices.length ? selectedPrices : [MIN, MAX]

	return (
		<div className='relative pt-1 flex justify-center flex-wrap'>
			<Range
				values={rangeValues}
				step={stepOfRangeInput}
				min={MIN}
				max={MAX}
				onChange={(values) => {
					setRangeValues(values);
				}}
				renderTrack={({ props, children }) => (
					<div
						onMouseDown={props.onMouseDown}
						onTouchStart={props.onTouchStart}
						style={{
							...props.style,
							height: '20px',
							display: 'flex',
							width: '100%',
						}}
					>
						<div
							ref={props.ref}
							style={{
								height: '5px',
								width: '100%',
								borderRadius: '4px',
								background: getTrackBackground({
									values: rangeValues,
									colors: ['#ccc', '#548BF4', '#ccc'],
									min: MIN,
									max: MAX,
								}),
								alignSelf: 'center',
							}}
						>
							{children}
						</div>
					</div>
				)}
				renderThumb={({ props, isDragged }) => (
					<div
						{...props}
						style={{
							...props.style,
							height: '22px',
							width: '22px',
							borderRadius: '4px',
							backgroundColor: '#FFF',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							boxShadow: '0px 2px 6px #AAA',
						}}
					>
						<div
							style={{
								height: '16px',
								width: '5px',
								backgroundColor: isDragged ? '#548BF4' : '#CCC',
							}}
						/>
					</div>
				)}
			/>
		</div>
	);
};
