# Extraction audio avec yt_dlp

import yt_dlp

def download_audio(url, output_path="temp_audio"):
    """Télécharge l'audio d'une vidéo YouTube et le sauve sous le format mp3"""
    ydl_opts = {
        'format': 'bestaudio/best',  # Sélectionne la meilleure qualité audio
        'outtmpl': output_path,      # Sauvegarde l'audio dans un fichier temporaire
        'postprocessors': [{         # Convertir l'audio en MP3 après téléchargement
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
    }
    
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])
        
    return output_path
