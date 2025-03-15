import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Grid, Box, IconButton } from '@mui/material';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import "./Orbit.css";
import { teamData, boardMembers } from './teamData';

const OrbitSponsors = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [showBoardMembers, setShowBoardMembers] = useState(false);
  const [open, setOpen] = useState(false);

  const getSponsorStyle = (orbit, startAngle) => {
    const animationDuration = (orbit * 15) + 's';
    const animationName = `orbit-sponsors-orbit${orbit}`;
    const initialRotation = `rotate(${startAngle}deg) translateX(${orbit * 75}px) rotate(-${startAngle}deg)`;

    return {
      animation: `${animationName} ${animationDuration} linear infinite`,
      transform: initialRotation,
      animationDelay: `-${startAngle / 360 * parseInt(animationDuration)}s`,
      zIndex: 3
    };
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleCardClick = (team) => {
    setSelectedTeam(team);
    setShowBoardMembers(false);
    setOpen(true);
  };

  const handleBoardMembersClick = () => {
    setSelectedTeam(null);
    setShowBoardMembers(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTeam(null);
    setShowBoardMembers(false);
  };

  return (
    <div className="orbit-sponsors-container">
      <h2 className="orbit-section-title">Our Team</h2>
      <div 
        className={`orbit-sponsors-content ${isPaused ? 'paused' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="orbit-sponsors-logo"
          onClick={handleBoardMembersClick}
          style={{ cursor: 'pointer' }}
        >
          <div className="card-text">Board Members</div>
        </div>

        {teamData.map((team, index) => (
          <div 
            key={index}
            className="orbit-sponsors-logo"
            style={getSponsorStyle(team.orbit, team.startAngle)}
            title={team.name}
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick(team);
            }}
          >
            <div className="card-text">{team.name}</div>
          </div>
        ))}
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg" // Changed from 'md' to 'lg' for larger dialog
        fullWidth
        PaperProps={{
          style: {
            background: 'rgba(17, 17, 17, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'white',
            maxHeight: '90vh', // Increased from 80vh to 90vh
            width: '90%', // Added explicit width
            margin: 'auto' // Center the dialog
          }
        }}
      >
        {(selectedTeam || showBoardMembers) && (
          <>
            <DialogTitle sx={{ 
              background: 'linear-gradient(90deg, #8B5CF6, #EC4899)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 'bold',
              fontSize: '2rem', // Increased from 1.5rem
              padding: '24px 32px' // Increased padding
            }}>
              {showBoardMembers ? "Board Members" : `${selectedTeam.name} Team`}
            </DialogTitle>
            <DialogContent sx={{ padding: '16px 32px' }}> {/* Increased horizontal padding */}
              {!showBoardMembers && (
                <Typography sx={{ 
                  mb: 3, // Increased from 2
                  color: '#a0aec0',
                  fontSize: '1.1rem' // Increased font size
                }}>
                  {selectedTeam.description}
                </Typography>
              )}
              <Typography variant="h6" sx={{ 
                mb: 3, // Increased from 2
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.4rem' // Increased from default h6
              }}>
                {showBoardMembers ? "Our Leadership:" : "Team Members:"}
              </Typography>
              <Grid container spacing={4}> {/* Increased spacing from 3 to 4 */}
                {(showBoardMembers ? boardMembers : selectedTeam.members).map((member, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box sx={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px',
                      padding: '1.5rem', // Increased from 1rem
                      textAlign: 'center',
                      height: '100%', // Make all boxes the same height
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 25px rgba(139, 92, 246, 0.2)'
                      }
                    }}>
                      <Box
                        sx={{
                          width: '150px', // Increased from 120px
                          height: '150px', // Increased from 120px
                          margin: '0 auto 1.5rem', // Increased bottom margin
                          position: 'relative',
                          borderRadius: '10%',
                          border: '2px solid #8B5CF6',
                          overflow: 'hidden'
                        }}
                      >
                        <Box
                          component="img"
                          src={member.image}
                          alt={member.name}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                          }}
                        />
                      </Box>
                      <Typography sx={{ 
                        color: 'white',
                        fontWeight: 'bold',
                        mb: 0.5,
                        fontSize: '1.2rem' // Increased from default
                      }}>
                        {member.name}
                      </Typography>
                      <Typography sx={{ 
                        color: '#a0aec0',
                        mb: 2, // Increased from 1
                        fontSize: '1rem' // Increased from 0.9rem
                      }}>
                        {member.role}
                      </Typography>
                   {/* <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem', // Increased from 0.5rem
                        marginTop: 'auto' // Push to bottom of flex container
                      }}>
                        
                         
                        
                        {member.social.linkedin && (
                          <IconButton 
                            href={member.social.linkedin}
                            target="_blank"
                            sx={{ 
                              color: '#0077B5',
                              '&:hover': {
                                transform: 'scale(1.1)',
                                backgroundColor: 'rgba(0, 119, 181, 0.1)'
                              }
                            }}
                          >
                            <Linkedin size={24} /> 
                          </IconButton>
                        )}
                        
                        
                      </Box> */}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </DialogContent>
            <DialogActions sx={{ padding: '24px 32px' }}> {/* Increased padding */}
              <Button 
                onClick={handleClose}
                size="large" // Increased from default
                sx={{
                  background: 'linear-gradient(90deg, #8B5CF6, #EC4899)',
                  color: 'white',
                  padding: '10px 24px', // Increased padding
                  fontSize: '1rem', // Increased font size
                  '&:hover': {
                    background: 'linear-gradient(90deg, #7c3aed, #db2777)',
                  }
                }}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default OrbitSponsors;