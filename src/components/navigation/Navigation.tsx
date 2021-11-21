import {
	Box,
	CssBaseline,
	Divider,
	FormControlLabel,
	IconButton,
	List,
	SvgIcon,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
	Paper,
} from "@mui/material";
import { BrandIcon } from "assets";
import React, { useState } from "react";
import { MdChevronRight, MdClose, MdMenu } from "react-icons/md";
import { useAppDispatch } from "reduxStore";
import { toggleDarkModeReducer } from "reduxStore/app/appSlice";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { AppBar, Drawer, DrawerHeader } from "./NavigationComponents";
import { NAV_LINKS } from "constants/NavLinks";
import { useNavigate } from "react-location";

type NavigationTypes = {
	children: React.ReactNode;
};

const Navigation = ({ children }: NavigationTypes) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position='fixed' color='inherit'>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={toggleDrawer}
						edge='start'>
						{open ? <MdClose /> : <MdMenu />}
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						<BrandIcon /> Brand Name
					</Typography>
					<FormControlLabel
						control={
							<DarkModeSwitch
								sx={{ m: 1 }}
								onClick={() => dispatch(toggleDarkModeReducer())}
							/>
						}
						label={""}
					/>
				</Toolbar>
			</AppBar>
			<Drawer variant='permanent' open={open}>
				<DrawerHeader>
					<IconButton onClick={toggleDrawer}>
						<MdChevronRight />
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{NAV_LINKS?.map((nav) => (
						<ListItem
							button
							key={nav.key}
							onClick={() => navigate({ to: nav.path })}>
							<ListItemIcon>
								{/* TODO: pick one of the two formats for displaying svg icons */}
								<SvgIcon component={nav.icon} />
								{/* <nav.icon /> */}
							</ListItemIcon>
							<ListItemText primary={nav.title} />
						</ListItem>
					))}
				</List>
			</Drawer>

			<Paper
				component='main'
				sx={{
					flexGrow: 1,
					p: 3,
					overflowX: "hidden",
					height: "100%",
					width: "100%",
				}}>
				<DrawerHeader />
				{children}
			</Paper>
		</Box>
	);
};
export default Navigation;
