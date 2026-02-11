import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import SymptomChecker from './components/SymptomChecker';
import MedicineBase from './components/MedicineBase';
import EducationHub from './components/EducationHub';
import StatsDashboard from './components/StatsDashboard';
import AboutSection from './components/AboutSection';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<SymptomChecker />} />
                    <Route path="/medicines" element={<MedicineBase />} />
                    <Route path="/education" element={<EducationHub />} />
                    <Route path="/stats" element={<StatsDashboard />} />
                    <Route path="/about" element={<AboutSection />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
