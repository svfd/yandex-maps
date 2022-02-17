import React from 'react';

import './move-item.scss';

type Props = {
	moveStart: (element: HTMLElement) => void,
	moveEnd: (element: HTMLElement) => void,
	children: JSX.Element | JSX.Element[]
};

const writeCoords = (evt: MouseEvent | TouchEvent, object: {x: number, y: number}) => {

	if (window.TouchEvent && evt instanceof TouchEvent) {
		object.x = evt.touches[0].pageX;
		object.y = evt.touches[0].pageY;
	} else if (evt instanceof MouseEvent) {
		object.x = evt.pageX;
		object.y = evt.pageY;
	}

};

const MoveItem = ({ moveStart, moveEnd, children, ...props }: Props) => {

	const _stopBodyScroll = () => {
		document.body.classList.add('without-scroll');
	};

	const _resetBodyScroll = () => {
		document.body.classList.remove('without-scroll');
	};

	const startCoords = {
		x: 0,
		y: 0
	};

	let draggableElement: HTMLElement ;
	let belowElement: HTMLElement;
	let droppableElement: HTMLElement;

	const moveStartHandler = (evt: MouseEvent | TouchEvent) => {

		writeCoords(evt, startCoords);

		const element = evt.target as HTMLElement;

		moveStart(element);

		draggableElement = element.cloneNode(true) as HTMLElement;

		_stopBodyScroll();

		document.addEventListener('mousemove', moveHandler);
		document.addEventListener('mouseup', moveEndHandler);

		document.addEventListener('touchmove', moveHandler);
		document.addEventListener('touchend', moveEndHandler);

		document.body.append(draggableElement);
	};

	const moveHandler = (evt: MouseEvent | TouchEvent) => {

		const moveCoords = {
			x: 0,
			y: 0
		};
		
		writeCoords(evt, moveCoords);

		draggableElement.hidden = true;

		belowElement = document.elementFromPoint(moveCoords.x, moveCoords.y) as HTMLElement;

		draggableElement.hidden = false;

		if (droppableElement !== belowElement) {

			if (droppableElement) {
				moveLeave(droppableElement);
			}

			droppableElement = belowElement;

			if (droppableElement && draggableElement?.classList[0] === belowElement?.classList[0]) {
				moveEnter(droppableElement);
			}

		}

		draggableElement.classList.add('current-draggable');

		draggableElement.style.top = `${moveCoords.y! - (draggableElement.offsetHeight / 2)}px`;
		draggableElement.style.left = `${moveCoords.x! - (draggableElement.offsetWidth / 2)}px`;
	};

	const moveEnter = (element: HTMLElement) => {
		element.style.outline = '2px dashed black';
	};

	const moveLeave = (element: HTMLElement) => {
		element.style.outline = 'none';
	};

	const moveEndHandler = () => {

		_resetBodyScroll();

		if (belowElement && belowElement.classList[0] === draggableElement.classList[0]) {
			moveEnd(belowElement);
			moveLeave(droppableElement);
		}

		document.body.removeChild(draggableElement);

		document.removeEventListener('mousemove', moveHandler);
		document.removeEventListener('mouseup', moveEndHandler);

		document.removeEventListener('touchmove', moveHandler);
		document.removeEventListener('touchend', moveEndHandler);
	};

	return (
		<>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					...props,
					onMouseDown: moveStartHandler,
					onTouchStart: moveStartHandler
				});
			})}
		</>
	);
};

export default MoveItem;