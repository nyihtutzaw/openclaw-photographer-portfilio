import React from 'react';
import { render, screen } from '@testing-library/react';
import TeamSection from '../team-section';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe('TeamSection', () => {
  it('renders team section with heading', () => {
    render(<TeamSection />);
    expect(screen.getByRole('heading', { name: /our team/i })).toBeInTheDocument();
  });

  it('renders team member cards', () => {
    render(<TeamSection />);
    expect(screen.getByText('Sarah Anderson')).toBeInTheDocument();
    expect(screen.getByText('Lead Photographer')).toBeInTheDocument();
  });

  it('renders all team members', () => {
    render(<TeamSection />);
    const teamMembers = [
      'Sarah Anderson',
      'James Mitchell',
      'Emma Davis',
      'Michael Chen',
      'Lisa Rodriguez',
      'David Wilson',
    ];

    teamMembers.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('displays correct grid layout classes', () => {
    const { container } = render(<TeamSection />);
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('md:grid-cols-2');
    expect(grid).toHaveClass('lg:grid-cols-3');
  });
});
