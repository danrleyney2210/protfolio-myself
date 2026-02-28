import React from 'react';
import {
  FaGlobe,
  FaMobileAlt,
  FaBrain,
  FaServer,
  FaTh
} from 'react-icons/fa';
import * as S from './styles';

interface INavTabProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const NavTab: React.FC<INavTabProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'all', label: 'All projects', icon: FaTh },
    { id: 'web', label: 'Web Apps', icon: FaGlobe },
    { id: 'mobile', label: 'Mobile', icon: FaMobileAlt },
    { id: 'ai', label: 'AI Automation', icon: FaBrain },
    { id: 'fullstack', label: 'Full Stack Project', icon: FaServer }
  ];

  return (
    <S.Wrapper>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <S.TabButton
            key={tab.id}
            isActive={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
          >
            <Icon />
            {tab.label}
          </S.TabButton>
        );
      })}
    </S.Wrapper>
  );
};
