import { Avatar, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material';
import { React, useState } from 'react';
import { Add as AddIcon, EmojiEmotions } from '@mui/icons-material';
import { Box, width } from '@mui/system';

const Add = () => {
	const [open, setOpen] = useState(false);

	const StyledModal = styled(Modal)({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	});

	const UserBox = styled(Box)({
		display: 'flex',
		alignItems: 'center',
		gap: '20px',
		marginBottom: '20px',
	});

	return (
		<>
			<Tooltip
				onClick={(e) => setOpen(true)}
				title='Delete'
				sx={{
					position: 'fixed',
					bottom: 20,
					left: { xs: 'calc(50% - 25px)', md: 30 },
				}}>
				<Fab color='primary' aria-label='add'>
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={(e) => setOpen(false)}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box width={400} height={200} bgcolor='white' p={2}>
					<Typography variant='h6' color='gray' textAlign='center'>
						Create new Post
					</Typography>
					<UserBox>
						<Avatar
							src='https://material-ui.com/static/images/avatar/1.jpg'
							sx={{ width: 30, height: 30 }}
						/>
						<Typography fontWeight={500} variant='span'>
							Farrukh dev
						</Typography>
					</UserBox>
					<TextField
                        sx={{width:"100%"}}
						id='standard-multiline-static'
						label='Multiline'
						multiline
						rows={3}
						placeholder="What's on your mind? "
						variant='standard'
					/>
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions/>
                        <EmojiEmotions/>
                        <EmojiEmotions/>
                        <EmojiEmotions/>
                    </Stack>
				</Box>
			</StyledModal>
		</>
	);
};

export default Add;
