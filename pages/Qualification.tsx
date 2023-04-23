import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography, Box, Grid } from '@mui/material';

export default function Qualification() {
    return (
        <Box sx={{ m: '100px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ mt: 5, fontSize: '35px' }}>QUALIFICATION</Typography>
                <Box sx={{ width: '8.8rem', height: '5.8px', borderRadius: '11px', background: '#20C5FA' }} />
            </Box>
            <Timeline position="alternate" sx={{ mt: '57px' }}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ background: '#20C5FA' }} />
                        <TimelineConnector sx={{ background: '#20C5FA' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '0', px: 2 }}>
                        <Typography variant="subtitle1" component="span">
                            Master's in Computer Application
                        </Typography>
                        <Typography

                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >2016-2020</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ background: '#20C5FA' }} />
                        <TimelineDot sx={{ background: '#20C5FA' }} />
                        <TimelineConnector sx={{ background: '#20C5FA' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="subtitle1" component="span">
                            Front-End developer
                        </Typography>
                        <Typography

                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >2020-2021</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ background: '#20C5FA' }} />
                        <TimelineDot sx={{ background: '#20C5FA' }} />
                        <TimelineConnector sx={{ background: '#20C5FA' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="subtitle1" component="span">
                            UI/UX Designer
                        </Typography>
                        <Typography

                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >2021-2022</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ background: '#20C5FA' }} />
                        <TimelineDot sx={{ background: '#20C5FA' }} />
                        <TimelineConnector sx={{ background: '#20C5FA' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="subtitle1" component="span">
                            Web developer
                        </Typography>
                        <Typography

                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >2022-2023</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    )
}
