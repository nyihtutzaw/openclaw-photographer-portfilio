'use client';

import { TeamMember } from '@/types/team';
import FlipCard from './team-card-flip';

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Anderson',
    position: 'Lead Photographer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop',
    skills: ['Portrait Photography', 'Lighting Design', 'Post-Processing', 'Client Management'],
    motto: 'Every moment tells a story; my job is to capture it beautifully.',
  },
  {
    id: '2',
    name: 'James Mitchell',
    position: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    skills: ['Art Direction', 'Concept Development', 'Team Leadership', 'Visual Storytelling'],
    motto: 'Vision without execution is just a dream; creativity is our fuel.',
  },
  {
    id: '3',
    name: 'Emma Davis',
    position: 'Retouching Specialist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop',
    skills: ['Image Retouching', 'Color Grading', 'Adobe Creative Suite', 'Quality Assurance'],
    motto: 'Perfection is in the details; every pixel matters.',
  },
  {
    id: '4',
    name: 'Michael Chen',
    position: 'Studio Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop',
    skills: ['Studio Operations', 'Equipment Management', 'Scheduling', 'Vendor Relations'],
    motto: 'Great creativity needs great logistics to thrive.',
  },
  {
    id: '5',
    name: 'Lisa Rodriguez',
    position: 'Lighting Technician',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop',
    skills: ['Lighting Setup', 'Technical Troubleshooting', 'Equipment Expertise', 'Safety Protocols'],
    motto: 'Light shapes the world; I shape the light.',
  },
  {
    id: '6',
    name: 'David Wilson',
    position: 'Post-Production Editor',
    image: 'https://images.unsplash.com/photo-1507238691201-ab76e55e6d7d?w=500&h=500&fit=crop',
    skills: ['Video Editing', 'Motion Graphics', 'Audio Engineering', 'File Management'],
    motto: 'The magic happens in the edit; patience and precision create excellence.',
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the talented professionals behind every exceptional photograph
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <FlipCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
