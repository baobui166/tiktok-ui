import Button from '~/components/Button/Button';
import className from 'classnames/bind';
import styles from './Menu.module.scss';

const cs = className.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cs('menu-item', { separate: data.separate });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
