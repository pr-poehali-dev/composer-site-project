import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tracks = [
    { title: 'Симфония №1 "Космическая"', duration: '4:32' },
    { title: 'Вальс Луны', duration: '3:45' },
    { title: 'Концерт для фортепиано', duration: '6:18' },
    { title: 'Серенада звёзд', duration: '5:24' }
  ];

  const videos = [
    { title: 'Концерт в Большом театре', url: 'https://youtube.com/watch?v=example1' },
    { title: 'Запись в студии', url: 'https://youtube.com/watch?v=example2' },
    { title: 'Мастер-класс', url: 'https://youtube.com/watch?v=example3' }
  ];

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playTrack = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(true);
  };

  const renderSection = () => {
    switch(currentSection) {
      case 'bio':
        return (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-playfair text-deep-navy mb-6">Биография</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg font-source text-gray-700 leading-relaxed">
                  Александр Космический — современный композитор, чьи произведения объединяют классические традиции с инновационными звучаниями XXI века.
                </p>
                <p className="text-lg font-source text-gray-700 leading-relaxed">
                  Родился в музыкальной семье, начал сочинять в возрасте 7 лет. Окончил Московскую консерваторию с красным дипломом.
                </p>
                <p className="text-lg font-source text-gray-700 leading-relaxed">
                  Его произведения исполняются ведущими оркестрами мира. Лауреат международных премий и конкурсов.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/img/a252d47c-e0ae-4439-839d-a3c75e3ece97.jpg" 
                  alt="Портрет композитора"
                  className="rounded-lg shadow-2xl max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        );
      
      case 'works':
        return (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-playfair text-deep-navy mb-6">Произведения</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Симфония №1 "Космическая"', year: '2023', genre: 'Симфоническая музыка' },
                { title: 'Вальс Луны', year: '2022', genre: 'Камерная музыка' },
                { title: 'Концерт для фортепиано', year: '2021', genre: 'Концерт' },
                { title: 'Серенада звёзд', year: '2023', genre: 'Оркестровая музыка' },
                { title: 'Космические этюды', year: '2022', genre: 'Фортепианная музыка' },
                { title: 'Галактическая сюита', year: '2021', genre: 'Симфоническая музыка' }
              ].map((work, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-teal-accent/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair text-deep-navy mb-2">{work.title}</h3>
                    <p className="text-fire-orange font-medium mb-1">{work.year}</p>
                    <p className="text-gray-600 font-source">{work.genre}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      
      case 'videos':
        return (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-playfair text-deep-navy mb-6">Видео</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-ocean-blue/20">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-gradient-to-br from-fire-orange to-teal-accent rounded-lg mb-4 flex items-center justify-center">
                      <Icon name="Play" size={48} className="text-white" />
                    </div>
                    <h3 className="text-lg font-playfair text-deep-navy mb-2">{video.title}</h3>
                    <Button 
                      variant="outline" 
                      className="w-full border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
                      onClick={() => window.open(video.url, '_blank')}
                    >
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Смотреть
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      
      case 'audio':
        return (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-playfair text-deep-navy mb-6">Аудио</h2>
            
            {/* Audio Player */}
            <Card className="mb-8 border-fire-orange/30 bg-gradient-to-r from-light-gray to-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-playfair text-deep-navy">{tracks[currentTrack].title}</h3>
                    <p className="text-gray-600 font-source">{tracks[currentTrack].duration}</p>
                  </div>
                  <Button
                    onClick={togglePlayPause}
                    className="bg-fire-orange hover:bg-fire-orange/90 text-white rounded-full w-16 h-16 animate-pulse-glow"
                  >
                    <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
                  </Button>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-fire-orange h-2 rounded-full w-1/3 transition-all duration-300"></div>
                </div>
                
                {/* Audio Controls */}
                <div className="flex items-center justify-center space-x-4">
                  <Button variant="ghost" size="sm" onClick={() => playTrack(Math.max(0, currentTrack - 1))}>
                    <Icon name="SkipBack" size={20} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icon name="Volume2" size={20} />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => playTrack(Math.min(tracks.length - 1, currentTrack + 1))}>
                    <Icon name="SkipForward" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Playlist */}
            <div className="space-y-3">
              {tracks.map((track, index) => (
                <Card 
                  key={index} 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                    currentTrack === index ? 'border-fire-orange bg-fire-orange/5' : 'border-gray-200 hover:border-teal-accent'
                  }`}
                  onClick={() => playTrack(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-teal-accent/20 flex items-center justify-center">
                          <Icon name={currentTrack === index && isPlaying ? "Pause" : "Play"} size={16} />
                        </div>
                        <div>
                          <h4 className="font-playfair text-deep-navy">{track.title}</h4>
                        </div>
                      </div>
                      <span className="text-gray-500 font-source text-sm">{track.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-playfair text-deep-navy mb-6">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-teal-accent/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair text-deep-navy mb-4">Связаться со мной</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={20} className="text-fire-orange" />
                      <span className="font-source">cosmos.composer@music.ru</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={20} className="text-fire-orange" />
                      <span className="font-source">+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="MapPin" size={20} className="text-fire-orange" />
                      <span className="font-source">Москва, Россия</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-ocean-blue/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair text-deep-navy mb-4">Социальные сети</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start border-teal-accent text-teal-accent hover:bg-teal-accent hover:text-white">
                      <Icon name="Youtube" size={20} className="mr-3" />
                      YouTube канал
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white">
                      <Icon name="Music" size={20} className="mr-3" />
                      Spotify
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-fire-orange text-fire-orange hover:bg-fire-orange hover:text-white">
                      <Icon name="Instagram" size={20} className="mr-3" />
                      Instagram
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-7xl font-playfair text-deep-navy mb-6 animate-float">
                Сергей
                <span className="bg-gradient-to-r from-fire-orange to-teal-accent bg-clip-text text-transparent"> Калинин</span>
              </h1>
              <p className="text-2xl font-source text-gray-600 mb-8">Композитор современности</p>
              <div className="flex justify-center space-x-4">
                <Button 
                  className="bg-fire-orange hover:bg-fire-orange/90 text-white px-8 py-3 text-lg animate-pulse-glow"
                  onClick={() => setCurrentSection('audio')}
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Слушать музыку
                </Button>
                <Button 
                  variant="outline" 
                  className="border-teal-accent text-teal-accent hover:bg-teal-accent hover:text-white px-8 py-3 text-lg"
                  onClick={() => setCurrentSection('videos')}
                >
                  <Icon name="Video" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
            </div>
            
            {/* Featured Works */}
            <div className="mb-16">
              <h2 className="text-3xl font-playfair text-deep-navy text-center mb-8">Избранные произведения</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {tracks.slice(0, 3).map((track, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-fire-orange/20">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-fire-orange to-teal-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Music" size={24} className="text-white" />
                      </div>
                      <h3 className="text-lg font-playfair text-deep-navy mb-2">{track.title}</h3>
                      <p className="text-gray-600 font-source mb-4">{track.duration}</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-fire-orange text-fire-orange hover:bg-fire-orange hover:text-white"
                        onClick={() => {
                          setCurrentSection('audio');
                          playTrack(index);
                        }}
                      >
                        <Icon name="Play" size={16} className="mr-2" />
                        Играть
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Quote */}
            <div className="text-center bg-gradient-to-r from-light-gray to-white p-8 rounded-lg border border-teal-accent/20">
              <blockquote className="text-2xl font-playfair text-deep-navy mb-4 italic">
                "Музыка — это язык вселенной, и я лишь переводчик её космических симфоний"
              </blockquote>
              <p className="text-fire-orange font-source">— Александр Космический</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray via-white to-teal-accent/10">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-playfair text-xl text-deep-navy font-bold">
              А. Космический
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'bio', label: 'Биография', icon: 'User' },
                { id: 'works', label: 'Произведения', icon: 'BookOpen' },
                { id: 'videos', label: 'Видео', icon: 'Video' },
                { id: 'audio', label: 'Аудио', icon: 'Music' },
                { id: 'contact', label: 'Контакты', icon: 'Mail' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-source transition-all duration-200 ${
                    currentSection === item.id
                      ? 'text-fire-orange bg-fire-orange/10'
                      : 'text-gray-700 hover:text-fire-orange hover:bg-fire-orange/5'
                  }`}
                >
                  <Icon name={item.icon as any} size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderSection()}
      </main>
      
      {/* Footer */}
      <footer className="bg-deep-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-playfair mb-4">Александр Космический</h3>
              <p className="font-source text-gray-300">
                Композитор, создающий музыку будущего на основе классических традиций.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-playfair mb-4">Быстрые ссылки</h3>
              <div className="space-y-2">
                {['Произведения', 'Видео', 'Аудио', 'Контакты'].map((link) => (
                  <button
                    key={link}
                    className="block text-gray-300 hover:text-fire-orange transition-colors font-source"
                    onClick={() => setCurrentSection(link.toLowerCase() === 'произведения' ? 'works' : link.toLowerCase() === 'видео' ? 'videos' : link.toLowerCase() === 'аудио' ? 'audio' : 'contact')}
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-playfair mb-4">Следите за творчеством</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-fire-orange p-2">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-teal-accent p-2">
                  <Icon name="Music" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-ocean-blue p-2">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-source">
              © 2024 Александр Космический. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Hidden Audio Element */}
      <audio ref={audioRef} />
    </div>
  );
}