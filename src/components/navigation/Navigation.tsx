import {
	Box,
	CssBaseline,
	IconButton,
	List,
	SvgIcon,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
	Paper,
	Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { BrandIcon } from "assets";
import React, { useState } from "react";
import { MdMenuOpen, MdMenu } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { RiMoonClearLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "store";
import { toggleDarkModeReducer, appDataInReduxStore } from "store/app/appSlice";
import { AppBar, Drawer, DrawerHeader } from "./NavigationComponents";
import { NAV_LINKS } from "constants/NavLinks";
import { useNavigate } from "react-location";

type NavigationTypes = {
	children: React.ReactNode;
};

const Navigation = ({ children }: NavigationTypes) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { isDarkModeActive } = useAppSelector(appDataInReduxStore);

	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position='fixed' color='inherit'>
				<Toolbar>
					<Grid container justifyContent='space-between' alignItems='center'>
						<Grid item container xs={10} alignItems='center'>
							<IconButton
								color='inherit'
								aria-label='open drawer'
								onClick={toggleDrawer}
								edge='start'>
								{open ? <MdMenuOpen /> : <MdMenu />}
							</IconButton>
							<BrandIcon />
							<Typography variant='h6' noWrap component='div'>
								Brand Name
							</Typography>
						</Grid>
						<Grid
							item
							container
							xs={1}
							alignItems='center'
							justifyContent={"flex-end"}>
							{/* dark mode toggle switch */}

							<motion.div whileTap={{ scale: 0.9 }}>
								<IconButton onClick={() => dispatch(toggleDarkModeReducer())}>
									{isDarkModeActive ? <RiMoonClearLine /> : <ImSun />}
								</IconButton>
							</motion.div>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<Drawer variant='permanent' open={open}>
				<DrawerHeader />
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
					p: 1,
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
