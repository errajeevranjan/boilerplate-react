import { motion } from "framer-motion";

type RisingAnimationTypes = {
	children: React.ReactNode;
	key?: string;
};

const RisingAnimation = (props: RisingAnimationTypes) => {
	const { children, key } = props;
	return (
		<motion.div
			key={key} //key is required if and when there are multiple usages of this component in one file
			initial={{ y: "100%" }}
			animate='visible'
			variants={{
				visible: (i) => ({
					y: 0,
					transition: {
						delay: i * 0.1,
					},
				}),
			}}>
			{children}
		</motion.div>
	);
};

export default RisingAnimation;
