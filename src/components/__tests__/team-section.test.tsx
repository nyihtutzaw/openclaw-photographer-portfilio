import React from 'react';
import { render, screen } from '@testing-library/react';
import TeamSection from '../team-section';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { fill, ...restProps } = props;
    return <img {...restProps} />;
  },
}));

describe('TeamSection', () => {
  it('renders team section with heading', () => {
    render(<TeamSection />);
    expect(screen.getByRole('heading', { name: /our team/i })).toBeInTheDocument();
  });

  it('renders team member cards', () => {
    render(<TeamSection />);
    expect(screen.getAllByText('Sarah Anderson').length).toBeGreaterThan(0);
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
      expect(screen.getAllByText(name).length).toBeGreaterThan(0);
    });
  });

  it('displays correct grid layout classes', () => {
    const { container } = render(<TeamSection />);
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('md:grid-cols-2');
    expect(grid).toHaveClass('lg:grid-cols-3');
  });

  it('renders skills for team members', () => {
    render(<TeamSection />);
    expect(screen.getByText('Portrait Photography')).toBeInTheDocument();
    expect(screen.getByText('Lighting Design')).toBeInTheDocument();
    expect(screen.getByText('Art Direction')).toBeInTheDocument();
  });
});
