import _ from 'lodash';
import React from 'react';
import PropTypes from 'react-peek/prop-types';
import { lucidClassNames } from '../../../util/style-helpers';
import { createClass, omitProps } from '../../../util/component-types';
import Icon from '../Icon';

const cx = lucidClassNames.bind('&-ChevronThinIcon');

const { oneOf } = PropTypes;

const ChevronThinIcon = createClass({
	displayName: 'ChevronThinIcon',

	statics: {
		peek: {
			description: `
				A flat, thin chevron icon for directional navigation.
			`,
			categories: ['visual design', 'icons'],
			extend: 'Icon',
			madeFrom: ['Icon'],
		},
	},

	_isPrivate: true,

	propTypes: {
		...Icon.propTypes,
		direction: oneOf(['left', 'right'])`
			direction variations of the icon
		`,
	},

	getDefaultProps() {
		return {
			direction: 'right',
		};
	},

	render() {
		const { className, direction, size, ...passThroughs } = this.props;

		return (
			<Icon
				{...omitProps(passThroughs, ChevronThinIcon, [], false)}
				{..._.pick(passThroughs, _.keys(Icon.propTypes))}
				className={cx('&', className)}
				size={size}
			>
				{direction === 'right' ? (
					<path d="M5 0l8 8-8 8-.75-.75L11.5 8 4.25.75z" />
				) : (
					<path d="M12 0L4 8l8 8 .75-.75L5.5 8 12.75.75z" />
				)}
			</Icon>
		);
	},
});

export default ChevronThinIcon;
