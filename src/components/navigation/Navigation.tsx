import {
	AppBar,
	Button,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	SwipeableDrawer,
	Toolbar,
	Typography,
	Stack,
	FormControlLabel,
	SvgIcon,
} from "@mui/material";
import { NAV_LINKS } from "constants/NavLinks";
import * as React from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { useAppDispatch, useAppSelector } from "reduxStore";
import {
	appDataInReduxStore,
	toggleDarkModeReducer,
} from "reduxStore/app/appSlice";

type ReactChildren = {
	children: React.ReactNode;
};

type Nav = {
	key: string;
	title: string;
	path: string;
	icon: React.ElementType;
};

const Navigation = ({ children }: ReactChildren) => {
	const dispatch = useAppDispatch();
	const { isDarkModeActive } = useAppSelector(appDataInReduxStore);

	const [open, setOpen] = React.useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
						onClick={toggleDrawer}>
						<MdMenu />
					</IconButton>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						Brand Name
					</Typography>
					<FormControlLabel
						control={
							<DarkModeSwitch
								sx={{ m: 1 }}
								onClick={() => dispatch(toggleDarkModeReducer())}
							/>
						}
						label={`${isDarkModeActive ? "Dark" : "Light"} Mode Active`}
					/>
				</Toolbar>
			</AppBar>

			{children}

			<SwipeableDrawer
				anchor={"left"}
				open={open}
				onClose={toggleDrawer}
				onOpen={toggleDrawer}>
				<Stack
					direction='row'
					justifyContent='space-around'
					alignItems='center'>
					<IconButton
						size='large'
						color='inherit'
						aria-label='close-menu'
						onClick={toggleDrawer}>
						<MdClose />
					</IconButton>

					<Button>Brand Name</Button>
				</Stack>
				<List>
					{NAV_LINKS.map((nav: Nav) => (
						<ListItem button key={nav.key}>
							<ListItemIcon>
								<SvgIcon component={nav.icon} />
							</ListItemIcon>
							<ListItemText primary={nav.title} />
						</ListItem>
					))}
				</List>
			</SwipeableDrawer>
		</>
	);
};
export default Navigation;
