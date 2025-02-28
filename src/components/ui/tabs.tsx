import { useState } from 'react';

type Props = {
    tabs: {
        label: string;
        value: string;
    }[];
    activeTab?: string;
    onClick: (tab: string) => void;
}

const Tabs = ({ tabs, activeTab, onClick }: Props) => {

    return (
        <div className="border-b border-gray-200 mb-8">
            <div className="flex space-x-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        className={`pb-4 px-1 ${activeTab === tab.value
                            ? 'border-b-2 border-gray-800 font-medium text-gray-800'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                        onClick={() => onClick(tab.value)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
