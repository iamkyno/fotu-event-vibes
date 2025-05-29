
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  date: string;
}

interface LightboxGalleryProps {
  images: GalleryItem[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const LightboxGallery = ({ images, initialIndex, isOpen, onClose }: LightboxGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      {/* Close button */}
      <Button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white border-0"
        size="sm"
      >
        <X className="w-5 h-5" />
      </Button>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white border-0"
            size="sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white border-0"
            size="sm"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </>
      )}

      {/* Main content */}
      <div className="flex flex-col items-center max-w-full max-h-full" onClick={(e) => e.stopPropagation()}>
        <div className="relative max-w-[90vw] max-h-[70vh] flex items-center justify-center">
          <img 
            src={currentImage.image} 
            alt={currentImage.title}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
        
        {/* Image info */}
        <div className="mt-6 text-center text-white max-w-md">
          <h3 className="text-xl font-semibold mb-2">{currentImage.title}</h3>
          <p className="text-gray-300 mb-3">{currentImage.date}</p>
          <p className="text-gray-400 text-sm">
            {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>

      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 max-w-[90vw] overflow-hidden">
          <div className="flex space-x-2 px-4 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`flex-shrink-0 w-16 h-16 rounded border-2 transition-all duration-300 ${
                  index === currentIndex ? 'border-yellow-400 scale-110' : 'border-gray-600 hover:border-gray-400'
                }`}
              >
                <img 
                  src={image.image} 
                  alt={image.title}
                  className="w-full h-full object-cover rounded"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LightboxGallery;
