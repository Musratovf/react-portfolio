import { Fab, Modal, styled, Tooltip } from '@mui/material';
import { React, useState } from 'react';
import { Add as AddIcon } from '@mui/icons-material';
import { Box } from '@mui/system';

const Add = () => {

    const [open, setOpen] = useState(false );
    
    const StyledModal = styled(Modal)({
        display:'flex',
        alignItems:"center",
        justifyContent:"center"
    })
    
	return (
		<>
			<Tooltip
                onClick={e=>setOpen(true)}
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
				onClose={e=>setOpen(false)}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box width={400} height={100} bgcolor="white" p={2} display='flex' flexDirection="column" textAlign="center" justifyContent="center">
					Hello
				</Box>
			</StyledModal>
		</>
	);
};

export default Add;
