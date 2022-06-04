import React from 'react';
import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material';

const Rightbar = () => {
	return (
		<>
			<Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
				<Box position={'fixed'} width={300}>
				<Typography variant='h6' fontWeight={100}>
						Online Friends
					</Typography>
					<AvatarGroup max={4}>
						<Avatar
							alt='Remy Sharp'
							src='https://material-ui.com/static/images/avatar/1.jpg'
						/>
						<Avatar
							alt='Remy Sharp'
							src='https://material-ui.com/static/images/avatar/2.jpg'
						/>
						<Avatar
							alt='Remy Sharp'
							src='https://material-ui.com/static/images/avatar/3.jpg'
						/>
						<Avatar
							alt='Remy Sharp'
							src='https://material-ui.com/static/images/avatar/4.jpg'
						/>
						<Avatar
							alt='Remy Sharp'
							src='https://material-ui.com/static/images/avatar/5.jpg'
						/>
					</AvatarGroup>
					<Typography variant='h6' fontWeight={100} mt={2} mb={2}>
						Lattest Photos
					</Typography>
					<ImageList cols={3} rowHeight={100}>
						<ImageListItem >
							<img
								src="https://material-ui.com/static/images/image-list/breakfast.jpg"
								alt="Image list img"
							/>
						</ImageListItem>
						<ImageListItem >
							<img
								src="https://material-ui.com/static/images/image-list/breakfast.jpg"
								alt="Image list img"
							/>
						</ImageListItem>
						<ImageListItem >
							<img
								src="https://material-ui.com/static/images/image-list/burgers.jpg"
								alt="Image list img"
							/>
						</ImageListItem>
					</ImageList>
					<Typography variant='h6' fontWeight={100} mt={2} mb={2}>
						Latest Convetions
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default Rightbar;
