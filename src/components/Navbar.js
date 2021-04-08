import React from 'react';
import './Navbar.css';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
}));

function Navbar() {
    const classes = useStyles();
	const theme = useTheme();

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

    return (
        <div className="navbar">
            <div className="navbar__collapsable">
                <MenuIcon
					onClick={handleDrawerOpen}
				/>
            </div>

            <Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='left'
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
                <div className='navbar__drawer'>
					<div className={classes.drawerHeader}>
						<IconButton onClick={handleDrawerClose}>
							<div className='navbar__drawerIcon'>
								{theme.direction === 'ltr' ? (
									<ChevronLeftIcon />
								) : (
									<ChevronRightIcon />
								)}
							</div>
						</IconButton>
					</div>

                    <div>                   
                        <p>home</p>
                    </div>                   
                </div>
            </Drawer>
            
            <div className="navbar__top">
                <h2>Home</h2>
                <h2>Profile</h2>
                <h2>About</h2>
            </div>
        </div>
    )
}

export default Navbar
