'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TeamMember } from '@/types/team';

interface FlipCardProps {
  member: TeamMember;
}

export default function FlipCard({ member }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-96 perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{
        perspective: '1000px',
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl group"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Image Container */}
          <div className="relative h-64 w-full overflow-hidden bg-gray-200">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Info Container */}
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {member.name}
            </h3>
            <p className="text-gray-600 mb-4">{member.position}</p>
            <p className="text-sm text-blue-600 font-medium">Hover to see motto</p>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-md hover:shadow-xl flex flex-col justify-center items-center p-6"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <h4 className="text-2xl font-bold text-white mb-6 text-center">
            {member.name}
          </h4>
          <p className="text-white text-lg italic text-center leading-relaxed px-4">
            "{member.motto}"
          </p>
          <p className="text-white text-xs mt-6 opacity-80">Move away to flip back</p>
        </div>
      </div>
    </div>
  );
}
