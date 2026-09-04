import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Shell } from './layout/Shell';
import { ScenarioProvider } from './state/ScenarioContext';
import { FocusProvider } from './state/FocusContext';
import { SearchProvider } from './state/SearchContext';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

const RecordIndex = lazy(() => import('@/pages/record/RecordIndex'));
const EpochPage = lazy(() => import('@/pages/record/EpochPage'));
const EventPage = lazy(() => import('@/pages/record/EventPage'));
const GraphPage = lazy(() => import('@/pages/record/GraphPage'));
const DomainsPage = lazy(() => import('@/pages/record/DomainsPage'));
const AccelerationPage = lazy(() => import('@/pages/record/AccelerationPage'));
const Threshold = lazy(() => import('@/pages/threshold/Threshold'));
const HorizonIndex = lazy(() => import('@/pages/horizon/HorizonIndex'));
const FieldPage = lazy(() => import('@/pages/horizon/FieldPage'));
const ConvergencePage = lazy(() => import('@/pages/horizon/ConvergencePage'));
const LifespanPage = lazy(() => import('@/pages/horizon/LifespanPage'));
const SearchPage = lazy(() => import('@/pages/SearchPage'));
const SourcesPage = lazy(() => import('@/pages/SourcesPage'));
const MethodologyPage = lazy(() => import('@/pages/MethodologyPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));

export function App() {
  return (
    <BrowserRouter basename="/epoch-atlas">
      <ScenarioProvider>
        <FocusProvider>
          <SearchProvider>
            <Routes>
              <Route element={<Shell />}>
                <Route index element={<Home />} />
                <Route path="record" element={<RecordIndex />} />
                <Route path="record/epochs/:epochId" element={<EpochPage />} />
                <Route path="record/events/:eventId" element={<EventPage />} />
                <Route path="record/graph" element={<GraphPage />} />
                <Route path="record/domains" element={<DomainsPage />} />
                <Route path="record/domains/:domain" element={<DomainsPage />} />
                <Route path="record/acceleration" element={<AccelerationPage />} />
                <Route path="threshold" element={<Threshold />} />
                <Route path="horizon" element={<HorizonIndex />} />
                <Route path="horizon/fields/:fieldId" element={<FieldPage />} />
                <Route path="horizon/convergence" element={<ConvergencePage />} />
                <Route path="horizon/lifespan" element={<LifespanPage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="sources" element={<SourcesPage />} />
                <Route path="methodology" element={<MethodologyPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </SearchProvider>
        </FocusProvider>
      </ScenarioProvider>
    </BrowserRouter>
  );
}
