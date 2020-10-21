import React from 'react';
import IconCoolResource from 'img/icons/cool.jpeg';
import IconNeedWorkOnThisResource from 'img/icons/need-work-on-this.jpeg';
import IconYouRockResource from 'img/icons/you-rock.jpeg';
import Image from 'patterns/atoms/Image';
import util from 'lib/utils';
import './styles.scss';

const Icon = ({cssIcon, size = 's'}) => {
    const icons = {
        'cool': IconCoolResource,
        'need-work-on-this': IconNeedWorkOnThisResource,
        'you-rock': IconYouRockResource
    };

    const getAltText = () => {
        return cssIcon &&  icons[cssIcon] ?
            util.capitalize(cssIcon).replace('-', ' ') : '';
    };

    return (
        <span
            className={`badge badge-light icon-competence icon-competence__${cssIcon} icon-badge-${size}`}
            >
            <Image image={icons[cssIcon]} alt={getAltText()} />
        </span>
    )
};

export default Icon;